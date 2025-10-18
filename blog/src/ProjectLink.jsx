export default function ProjectLink({ url, text }) {
  if (!url) return null;
  
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#14213D',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '6px',
        fontSize: '14px',
        marginRight: '10px'
      }}
    >
      <i className="bi bi-github" style={{ marginRight: '8px' }}></i>
      {text}
    </a>
  );
}