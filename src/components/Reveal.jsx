import { useReveal } from '../hooks.js';

export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, cls] = useReveal();
  return <Tag ref={ref} className={`${className} ${cls}`.trim()} {...rest}>{children}</Tag>;
}
