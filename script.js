const phoneNumberInput = document.getElementById('phoneNumber');
const callButton = document.getElementById('callButton');
const answerButton = document.getElementById('answerButton');
const hangupButton = document.getElementById('hangupButton');
const statusDiv = document.getElementById('status');

// SIP mijozini yaratish
const userAgent = new SIP.UA({
  uri: 'sip:170@call.openshop.uz',
  password: 'Open@7',
  transportOptions: {
    wsServers: 'wss://call.openshop.uz:5060/ws', // yoki 'udp://call.openshop.uz:5060'
  },
  register: true
});

// Qo'ng'iroq qilish
callButton.addEventListener('click', () => {
  const number = phoneNumberInput.value;
  const session = userAgent.invite(`sip:${number}@call.openshop.uz`);
  statusDiv.textContent = "Qo'ng'iroq qilinmoqda...";
  callButton.disabled = true;
  hangupButton.disabled = false;

  // Qo'ng'iroqqa javob berish
  session.on('accepted', () => {
    statusDiv.textContent = "Qo'ng'iroqda...";
  });

  // Qo'ng'iroqni tugatish
  hangupButton.addEventListener('click', () => {
    session.bye();
    statusDiv.textContent = "Qo'ng'iroq tugadi";
    callButton.disabled = false;
    hangupButton.disabled = true;
    answerButton.disabled = true;
  });
});

// Kiruvchi qo'ng'iroq
userAgent.on('invite', (session) => {
  statusDiv.textContent = "Kiruvchi qo'ng'iroq...";
  answerButton.disabled = false;
  hangupButton.disabled = false;

  // Qo'ng'iroqqa javob berish
  answerButton.addEventListener('click', () => {
    session.accept();
    statusDiv.textContent = "Qo'ng'iroqda...";
    answerButton.disabled = true;
  });

  // Qo'ng'iroqni tugatish
  hangupButton.addEventListener('click', () => {
    session.reject();
    statusDiv.textContent = "Qo'ng'iroq rad etildi";
    callButton.disabled = false;
    hangupButton.disabled = true;
    answerButton.disabled = true;
  });
});

// Qo'ng'iroq tugadi
userAgent.on('bye', (session) => {
  statusDiv.textContent = "Qo'ng'iroq tugadi";
  callButton.disabled = false;
  hangupButton.disabled = true;
  answerButton.disabled = true;
});