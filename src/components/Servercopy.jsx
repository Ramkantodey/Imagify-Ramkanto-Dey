import React, { useState } from 'react';

export default function Servercopy() {
    const [nid, setNid] = useState('');
    const [dob, setDob] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // তোমার API key এখানে বসাও
    const apiKey = 'daa82051ea249200';

    // PDF তৈরি করার জন্য jsPDF লাইব্রেরি দরকার, আগে npm install jspdf করতে হবে
    // import { jsPDF } from 'jspdf';

    const fetchData = async () => {
        setLoading(true);
        setError('');
        setData(null);

        // Validation
        if (!nid || !dob) {
            setError('Please enter NID and Date of Birth');
            setLoading(false);
            return;
        }

        // API URL
        const url = `https://denmarkofficial.online/management/sv.php?nid=${nid}&dob=${dob}&key=${apiKey}`;

        try {
            const res = await fetch(url);

            // Response content type চেক
            const contentType = res.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                const text = await res.text();
                throw new Error(`Expected JSON but got:\n${text}`);
            }

            const result = await res.json();

            if (result.code !== 200) {
                setError('API returned error: ' + result.status);
                setLoading(false);
                return;
            }

            setData(result.data);
        } catch (err) {
            // CORS অথবা অন্য কোন error handle
            setError('API error or connection issue: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    const downloadPdf = () => {
        if (!data) return;

        // jspdf দিয়ে pdf বানাতে পারো, এটা একটা খুব বেসিক উদাহরণ
        import('jspdf').then(({ jsPDF }) => {
            const doc = new jsPDF();
            let y = 10;

            Object.entries(data).forEach(([key, value]) => {
                doc.text(`${key}: ${value}`, 10, y);
                y += 10;
            });

            doc.save(`data_${nid}.pdf`);
        });
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-xl font-semibold mb-4">Servercopy API Data Fetch</h1>
            <div className="mb-4">
                <label className="block mb-1 font-medium">NID Number:</label>
                <input
                    type="text"
                    className="border rounded px-3 py-2 w-full"
                    value={nid}
                    onChange={(e) => setNid(e.target.value)}
                    placeholder="Enter NID"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Date of Birth:</label>
                <input
                    type="date"
                    className="border rounded px-3 py-2 w-full"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                />
            </div>
            <button
                onClick={fetchData}
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
                {loading ? 'Loading...' : 'Submit'}
            </button>

            {error && (
                <p className="mt-4 text-red-600 whitespace-pre-wrap">{error}</p>
            )}

            {data && (
                <div className="mt-6 border p-4 rounded bg-gray-50">
                    <h2 className="font-semibold mb-2">Fetched Data:</h2>
                    <ul className="text-sm space-y-1 max-h-64 overflow-auto">
                        {Object.entries(data).map(([key, value]) => (
                            <li key={key}>
                                <strong>{key}:</strong> {value}
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={downloadPdf}
                        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                        Download PDF
                    </button>
                </div>
            )}
        </div>
    );
}
