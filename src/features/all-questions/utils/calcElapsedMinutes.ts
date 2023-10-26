const calcElapsedMinutes = (unix: number) => Math.floor((Date.now() - unix * 1000) / (1000 * 60));

export default calcElapsedMinutes;
