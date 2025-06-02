import dayjs from 'dayjs';

export const formatDateString = (date: string): string => dayjs(date).format('DD/MM/YYYY');

export const toDayjs = (date: string): dayjs.Dayjs => dayjs(date, 'DD/MM/YYYY');
