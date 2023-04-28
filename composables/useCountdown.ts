export const useCountdown = (deadline: number) => {
  const minutes = ref<string>("00");
  const seconds = ref<string>("00");
  let timer = deadline;

  const chrono = setInterval(() => {
    const mins = Math.floor((timer % (60 * 60)) / 60);
    const secs = Math.floor(timer % 60);
    
    minutes.value = mins < 10 ? `0${mins}` : mins.toString();
    seconds.value = secs < 10 ? `0${secs}` : secs.toString();
    timer = timer - 1;

    if (timer < 0) clearInterval(chrono);
  }, 1000);

  return { minutes, seconds };
};
