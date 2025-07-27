export const fetchAllCounts = async () => {
  try {
    const res = await fetch('http://localhost:8080/randomize');
    const data = await res.json();

    console.log('Fetched data:', data);
    

    if (!data || !Array.isArray(data.data)) {
      throw new Error('Invalid API structure');
    }

    return data; // [{ number: X, count: Y }, ...]
  } catch (err) {
    console.warn('Using fallback JSON due to error:', err.message);

    return Array.from({ length: 100 }, (_, i) => ({
      number: i + 1,
      count: Math.floor(Math.random() * 6)
    }));
  }
};
