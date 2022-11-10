export default function toast({ type = 'default', text }) {
  const event = new CustomEvent('addtoast', {
    detail: {
      type,
      text
    }
  });
  document.dispatchEvent(event);
}
