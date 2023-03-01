import { toast } from 'react-toastify';

const notify = (message: string) => toast(`${message}`);

export { notify }