import { prisma } from "@/lib/prisma";

export default async function Page() {
    const query = await prisma.mobil.findMany();

    return (
        <div>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid grey' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid grey', padding: '8px' }}>Merk</th>
                        <th style={{ border: '1px solid grey', padding: '8px' }}>Tipe</th>
                        <th style={{ border: '1px solid grey', padding: '8px' }}>Tahun</th>
                        <th style={{ border: '1px solid grey', padding: '8px' }}>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {query.map(mobil => (
                        <tr key={mobil.id}>
                            <td style={{ border: '1px solid grey', padding: '8px' }}>{mobil.merk}</td>
                            <td style={{ border: '1px solid grey', padding: '8px' }}>{mobil.tipe}</td>
                            <td style={{ border: '1px solid grey', padding: '8px' }}>{mobil.tahun}</td>
                            <td style={{ border: '1px solid grey', padding: '8px' }}>{new Date(mobil.createdAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
