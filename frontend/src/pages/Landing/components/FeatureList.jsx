import React from 'react'
import Card from "../../../components/atoms/Card";
import { Bell, Calendar, CircleCheckBig, Flame } from "lucide-react";

const FeatureList = () => {
    const featureLists = [
        { name: "Konfirmasi Harian", desription: "Satu klik untuk mencatat konsumsi obat setiap hari.", icon: <CircleCheckBig size={20} /> },
        { name: "Streak Konsistensi", desription: "Pantau hari berturut-turut untuk menjaga rutinitas.", icon: <Flame size={20} /> },
        { name: "Perjalanan Sekian Bulan", desription: "Lihat progres pengobatan secara menyeluruh dan bertahap.", icon: <Calendar size={20} /> },
        { name: "Pengingat Kontrol", desription: "Pengingat jadwal kontrol ke dokter setiap waktu yang ditentukan.", icon: <Bell size={20} /> },
    ];

    return (
        <div className="flex flex-col gap-3 mt-11 lg:px-12 xl:px-28">
            <span className="font-inter font-semibold text-h4">Fitur Pendamping Anda</span>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {featureLists.map(list => (
                    <Card variant="white" size="full" boxShadowActive="true" className="flex gap-6 min-h-19.75" key={list.name}>
                        <div className="bg-primary/20 text-primary mt-0.5 p-2 rounded-md w-fit h-fit">
                            {list.icon}
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <span className="font-inter font-medium text-h4">{list.name}</span>
                            <span className="font-inter font-medium text-h5 text-black/60">{list.desription}</span>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default FeatureList