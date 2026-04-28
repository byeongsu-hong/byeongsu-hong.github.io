const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#F27A3A",
  "darkMode": true
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty('--accent', tweaks.accentColor);
    if (tweaks.darkMode) {
      r.setProperty('--bg', '#0B0B0D');
      r.setProperty('--fg', '#E8E5DF');
      r.setProperty('--dim', '#807B76');
      r.setProperty('--card', '#141417');
      r.setProperty('--border', '#252528');
    } else {
      r.setProperty('--bg', '#F6F4F0');
      r.setProperty('--fg', '#1A1918');
      r.setProperty('--dim', '#80796F');
      r.setProperty('--card', '#EDEAE4');
      r.setProperty('--border', '#D8D4CC');
    }
  }, [tweaks]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakColor label="Accent color" value={tweaks.accentColor} onChange={v => setTweak('accentColor', v)} />
      <TweakToggle label="Dark mode" value={tweaks.darkMode} onChange={v => setTweak('darkMode', v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<App />);
