export function formatDate(iso: string){
  const d = new Date(iso);
  return d.toLocaleDateString('fr-FR', { year:'numeric', month:'long', day:'numeric' });
}

export function siteUrl(){
  // Peut être surchargé par import.meta.env.PUBLIC_SITE_URL
  return (import.meta as any).env?.PUBLIC_SITE_URL || '';
}
