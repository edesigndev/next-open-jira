import Typography from '@mui/material/Typography';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  return (
    <Typography variant='h1' color='primary'>
      Hola mundo
    </Typography>
  );
}
