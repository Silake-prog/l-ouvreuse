const KEY = 'lo_reads_v1';
export function getReads(){
  if (typeof window === 'undefined') return 0;
  const n = Number(localStorage.getItem(KEY) || '0');
  return isNaN(n) ? 0 : n;
}
export function addRead(){
  if (typeof window === 'undefined') return;
  const n = getReads()+1;
  localStorage.setItem(KEY, String(n));
}
export function overQuota(limit = 3){
  return getReads() >= limit;
}
