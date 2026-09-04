export const Severity = {
  CRITICAL: 'critical',
  WARNING: 'warning',
  SUGGESTION: 'suggestion'
};

export function createFinding({ rule, message, severity, file, line }) {
  return {
    rule,
    message,
    severity,
    file,
    line: line || null
  };
}
