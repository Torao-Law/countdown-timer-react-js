import React, { useState } from 'react';

function CountdownTimer() {
  const [targetDateTime, setTargetDateTime] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(null);

  const startCountdown = () => {
    const targetTime = new Date(targetDateTime).getTime();

    if (isNaN(targetTime)) {
      alert('Masukkan tanggal dan waktu target yang valid.');
      return;
    }

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const remaining = targetTime - now;

      if (remaining <= 0) {
        clearInterval(intervalId);
        setTimeRemaining('Waktu telah habis!');
      } else {
        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (remaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

        const formattedTime = `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;
        setTimeRemaining(formattedTime);
      }
    }, 1000);
  };

  return (
    <div className="countdown">
      <h1>Penghitung Waktu Mundur</h1>
      <p>Masukkan Tanggal dan Waktu Target:</p>
      <input
        type="datetime-local"
        value={targetDateTime}
        onChange={(e) => setTargetDateTime(e.target.value)}
      />
      <button onClick={startCountdown}>Mulai</button>
      <p>Waktu Mundur:</p>
      <div id="countdownDisplay">{timeRemaining}</div>
    </div>
  );
}

export default CountdownTimer;
