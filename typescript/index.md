# TypeScript

filter defined

```
function filterDefined<T>(arr?: (T | undefined | null)[]): T[] {
  const res: T[] = [];
  arr?.forEach(el => {
    if (el != null) res.push(el);
  });
  return res;
}

```