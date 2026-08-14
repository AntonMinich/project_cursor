import { useEffect, useId, useMemo, useRef, useState } from 'react';
import {
  formatByPhone,
  formatPhoneForDisplay,
  isValidByPhone,
  isValidName,
} from '../utils/phone.js';
import { estimateMonthlyPayment, formatPrice } from '../data/products.js';

const TEST_CODE = '1111';
const STEPS = ['terms', 'form', 'sms', 'success'];

const INITIAL_FORM = {
  lastName: '',
  firstName: '',
  phone: '+375 ',
};

export default function LeasingFlow({ product, onClose }) {
  const titleId = useId();
  const [step, setStep] = useState('terms');
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [code, setCode] = useState(['', '', '', '']);
  const [smsError, setSmsError] = useState('');
  const [resendNote, setResendNote] = useState('');
  const [resendIn, setResendIn] = useState(0);
  const [busy, setBusy] = useState(false);
  const otpRefs = useRef([]);

  const monthly = product ? estimateMonthlyPayment(product.price) : 100;
  const stepIndex = STEPS.indexOf(step);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    if (resendIn <= 0) return undefined;
    const timer = window.setTimeout(() => setResendIn((value) => value - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [resendIn]);

  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const titles = useMemo(
    () => ({
      terms: 'Фламинго Лизинг',
      form: 'Получить консультацию',
      sms: 'Подтверждение номера',
      success: 'Спасибо!',
    }),
    [],
  );

  function validateForm() {
    const nextErrors = {};
    if (!isValidName(form.lastName)) {
      nextErrors.lastName = 'Укажите фамилию — минимум 2 буквы';
    }
    if (!isValidName(form.firstName)) {
      nextErrors.firstName = 'Укажите имя — минимум 2 буквы';
    }
    if (!isValidByPhone(form.phone)) {
      nextErrors.phone = 'Введите номер в формате +375 XX XXX-XX-XX';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function submitForm(event) {
    event.preventDefault();
    if (!validateForm()) return;
    setBusy(true);
    await wait(500);
    setBusy(false);
    setCode(['', '', '', '']);
    setSmsError('');
    setResendIn(20);
    setStep('sms');
  }

  async function confirmCode(event) {
    event.preventDefault();
    const value = code.join('');
    if (value.length < 4) {
      setSmsError('Введите 4-значный код из SMS');
      return;
    }
    setBusy(true);
    await wait(400);
    setBusy(false);
    if (value !== TEST_CODE) {
      setSmsError('Неверный код. Проверьте код из SMS и попробуйте ещё раз.');
      return;
    }
    setSmsError('');
    setStep('success');
  }

  async function resendCode() {
    if (resendIn > 0) return;
    setBusy(true);
    await wait(400);
    setBusy(false);
    setCode(['', '', '', '']);
    setSmsError('');
    setResendNote('Новый код отправлен. Для демо используйте 1111.');
    setResendIn(20);
  }

  function handleOtpChange(index, raw) {
    const digit = raw.replace(/\D/g, '').slice(-1);
    const next = [...code];
    next[index] = digit;
    setCode(next);
    setSmsError('');
    if (digit && index < 3) {
      otpRefs.current[index + 1]?.focus();
    }
  }

  function handleOtpKeyDown(index, event) {
    if (event.key === 'Backspace' && !code[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  }

  function handleOtpPaste(event) {
    event.preventDefault();
    const digits = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4).split('');
    if (!digits.length) return;
    const next = ['', '', '', ''];
    digits.forEach((digit, index) => {
      next[index] = digit;
    });
    setCode(next);
    otpRefs.current[Math.min(digits.length, 3)]?.focus();
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-head">
          <div>
            <p className="modal-kicker">Единый сценарий оформления</p>
            <h2 id={titleId}>{titles[step]}</h2>
          </div>
          <button type="button" className="close-btn" onClick={onClose} aria-label="Закрыть">
            ×
          </button>
        </div>
        <div className="steps" aria-hidden="true">
          {STEPS.map((item, index) => (
            <span
              key={item}
              className={`step-dot${index <= stepIndex ? ' is-active' : ''}${index < stepIndex ? ' is-done' : ''}`}
            />
          ))}
        </div>

        <div className="modal-body">
          {step === 'terms' && (
            <>
              <p className="modal-lead">
                Возьмите товар в лизинг и оплачивайте его частями.
              </p>
              <div className="payment-chip">
                {product ? (
                  <>
                    Для <b>{product.name}</b> ориентировочный платёж —{' '}
                    <b>от {formatPrice(monthly)} BYN/мес.</b> при сроке 18 месяцев и взносе 10%.
                  </>
                ) : (
                  <>
                    Ориентировочный ежемесячный платёж — <b>от 100 BYN</b>. Точная сумма зависит от
                    стоимости товара и срока.
                  </>
                )}
              </div>
              <ul className="terms-list">
                <li>
                  <span className="bullet">1</span>
                  оформление онлайн;
                </li>
                <li>
                  <span className="bullet">2</span>
                  удобный срок лизинга;
                </li>
                <li>
                  <span className="bullet">3</span>
                  первоначальный взнос от 10%;
                </li>
                <li>
                  <span className="bullet">4</span>
                  ежемесячный платеж — от 100 BYN;
                </li>
                <li>
                  <span className="bullet">5</span>
                  решение по заявке после предоставления необходимых данных.
                </li>
              </ul>
              <p className="fine-print">
                Окончательные условия зависят от параметров сделки, выбранного товара и данных
                клиента. Это демо-версия: реальная заявка не отправляется.
              </p>
              <button type="button" className="btn btn-flamingo" onClick={() => setStep('form')}>
                Консультация
              </button>
            </>
          )}

          {step === 'form' && (
            <form onSubmit={submitForm} noValidate>
              <p className="modal-lead">
                Оставьте свои данные, и специалист Фламинго свяжется с вами.
              </p>
              <div className="field">
                <label htmlFor="lastName">Фамилия</label>
                <input
                  id="lastName"
                  name="lastName"
                  autoComplete="family-name"
                  value={form.lastName}
                  className={errors.lastName ? 'is-invalid' : ''}
                  onChange={(event) => setForm((current) => ({ ...current, lastName: event.target.value }))}
                />
                {errors.lastName && <span className="field-error">{errors.lastName}</span>}
              </div>
              <div className="field">
                <label htmlFor="firstName">Имя</label>
                <input
                  id="firstName"
                  name="firstName"
                  autoComplete="given-name"
                  value={form.firstName}
                  className={errors.firstName ? 'is-invalid' : ''}
                  onChange={(event) => setForm((current) => ({ ...current, firstName: event.target.value }))}
                />
                {errors.firstName && <span className="field-error">{errors.firstName}</span>}
              </div>
              <div className="field">
                <label htmlFor="phone">Номер телефона</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={form.phone}
                  className={errors.phone ? 'is-invalid' : ''}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, phone: formatByPhone(event.target.value) }))
                  }
                />
                {errors.phone && <span className="field-error">{errors.phone}</span>}
              </div>
              <button type="submit" className="btn btn-flamingo" disabled={busy}>
                {busy ? 'Отправляем код…' : 'Получить консультацию'}
              </button>
            </form>
          )}

          {step === 'sms' && (
            <form onSubmit={confirmCode}>
              <p className="modal-lead">
                Мы отправили SMS с кодом подтверждения на номер{' '}
                <b>{formatPhoneForDisplay(form.phone)}</b>.
              </p>
              <div className="field">
                <label htmlFor="sms-0">Введите код из SMS</label>
                <div className="otp" onPaste={handleOtpPaste}>
                  {code.map((digit, index) => (
                    <input
                      key={index}
                      id={index === 0 ? 'sms-0' : undefined}
                      ref={(node) => {
                        otpRefs.current[index] = node;
                      }}
                      inputMode="numeric"
                      autoComplete={index === 0 ? 'one-time-code' : 'off'}
                      maxLength={1}
                      value={digit}
                      onChange={(event) => handleOtpChange(index, event.target.value)}
                      onKeyDown={(event) => handleOtpKeyDown(index, event)}
                      aria-label={`Цифра ${index + 1}`}
                    />
                  ))}
                </div>
                {smsError && <span className="field-error">{smsError}</span>}
                {resendNote && !smsError && <span className="fine-print">{resendNote}</span>}
              </div>
              <button type="submit" className="btn btn-flamingo" disabled={busy}>
                {busy ? 'Проверяем…' : 'Подтвердить'}
              </button>
              <div style={{ textAlign: 'center', marginTop: 8 }}>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={resendCode}
                  disabled={resendIn > 0 || busy}
                >
                  {resendIn > 0 ? `Отправить код повторно через ${resendIn} с` : 'Отправить код повторно'}
                </button>
              </div>
            </form>
          )}

          {step === 'success' && (
            <>
              <div className="success-mark" aria-hidden="true">
                ✓
              </div>
              <p className="modal-lead">
                Ваш номер подтвержден. Специалист Фламинго свяжется с вами для консультации.
              </p>
              <button type="button" className="btn btn-flamingo" onClick={onClose}>
                Закрыть
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}
