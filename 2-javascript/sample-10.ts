// Don't use undefined as a means of denoting validity

// Instead of this
function toInt(str: string) {
  return str ? parseInt(str) : undefined;
}

// Write this
function toInt(str: string): { valid: boolean; int?: number } {
  const int = parseInt(str);

  if (Number.isNaN(int)) {
    return { valid: false };
  } else {
    return { valid: true, int };
  }
}
