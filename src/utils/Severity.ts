import { assertNever } from './assertNever';

export enum Severity {
  Info = 'Info',
  Warning = 'Warning',
  Danger = 'Danger',
}

export function getSeverityClassName(severity: Severity) {
  switch (severity) {
    case Severity.Info:
      return 'severity--info';
    case Severity.Warning:
      return 'severity--warning';
    case Severity.Danger:
      return 'severity--danger';

    default:
      return assertNever(severity);
  }
}
