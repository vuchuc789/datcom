module.exports = {
  '*.{ts,tsx}': () => 'tsc -p tsconfig.json --noEmit --skipLibCheck',
  '*.{js,jsx,ts,tsx}': (filenames) =>
    filenames.length > 10
      ? 'eslint --fix .'
      : `eslint --fix ${filenames.join(' ')}`,
  '*.{md,html,css,json,yaml}': (filenames) =>
    filenames.length > 10
      ? 'prettier --write .'
      : `prettier --write ${filenames.join(' ')}`,
};
