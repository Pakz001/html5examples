// Set the sample rate and duration of the sine tone
const sampleRate = 44100;
const duration = 2; // 2 seconds

// Create an array of samples for the sine tone
const numSamples = sampleRate * duration;
const samples = new Float32Array(numSamples);
for (let i = 0; i < numSamples; i++) {
  const t = i / sampleRate;
  const frequency = 440; // 440 Hz
  samples[i] = Math.sin(2 * Math.PI * frequency * t);
}

// Convert the samples to a wav file format
const wav = toWav(samples);

// Write the wav file to a file or send it to the browser
const file = new Blob([wav], { type: 'audio/wav' });
const url = URL.createObjectURL(file);

// Option 1: write the file to the local filesystem
const a = document.createElement('a');
a.href = url;
a.download = 'sine-tone.wav';
document.body.appendChild(a);
a.click();
document.body.removeChild(a);

// Option 2: send the file to the browser to be played
const audio = new Audio();
audio.src = url;
audio.play();

// Helper function to convert the samples to a wav file format
function toWav(samples) {
  const numChannels = 1;
  const bitsPerSample = 16;
  const blockAlign = numChannels * bitsPerSample / 8;
  const byteRate = sampleRate * blockAlign;
  const data = interleave(samples);
  const wav = [
    'RIFF',
    pad(4 + (8 + 24 + 8 + data.length)), // file length
    'WAVE',
    // fmt chunk
    'fmt ', // chunk id
    pad(16), // chunk size
    0x0001, // compression code
    numChannels,
    sampleRate,
    byteRate,
    blockAlign,
    bitsPerSample,
    // data chunk
    'data', // chunk id
    pad(data.length), // chunk size
    data
  ];
  return wav.join('');
}

// Helper function to convert the samples to a interleaved format
function interleave(samples) {
  const data = new Uint8Array(samples.length * 2);
  for (let i = 0; i < samples.length; i++) {
    const sample = samples[i] * 0x7fff;
    data[i * 2] = sample;
    data[i * 2 + 1] = sample >> 8;
  }
  return data;
}

// Helper function to pad a string with null characters
function pad(num) {
  return '\0\0\0\0'.slice(0, 4 - num.toString().length) + num;
}
