const Input = ({ label, error, hint, ...rest }) => {
  return (
    <div style={{ marginBottom: 14 }}>
      {label && (
        <label style={{ display: "block", marginBottom: 6 }}>{label}</label>
      )}
      <input
        {...rest}
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: 8,
          border: error ? "1px solid #e11d48" : "1px solid #cbd5e1",
          outline: "none",
        }}
      />
      {hint && !error && (
        <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>
          {hint}
        </div>
      )}
      {error && (
        <div style={{ fontSize: 12, color: "#e11d48", marginTop: 4 }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
