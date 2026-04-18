type GoogleJwtCredentials = {
  clientEmail: string;
  privateKey: string;
};

const normalizePrivateKey = (key: string) => key.replace(/\\n/g, "\n");

export const getGoogleSheetsJwtCredentials = (): GoogleJwtCredentials | null => {
  const rawJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (rawJson) {
    try {
      const parsed = JSON.parse(rawJson) as {
        client_email?: string;
        private_key?: string;
      };
      if (!parsed.client_email || !parsed.private_key) {
        return null;
      }
      return {
        clientEmail: parsed.client_email,
        privateKey: normalizePrivateKey(parsed.private_key),
      };
    } catch {
      return null;
    }
  }

  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKeyRaw = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
  if (!clientEmail || !privateKeyRaw) {
    return null;
  }
  return {
    clientEmail,
    privateKey: normalizePrivateKey(privateKeyRaw),
  };
};

export const isGoogleSheetSourceConfigured = (): boolean =>
  Boolean(
    process.env.GOOGLE_SHEETS_SPREADSHEET_ID &&
      getGoogleSheetsJwtCredentials(),
  );
