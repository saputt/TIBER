import React from "react";
import Card from "../../components/atoms/Card";

const InfoUserPage = () => {
  const informationUsers = [
    [
      {
        type: "heading",
        text: "Syarat & Ketentuan"
      },
      {
        type: "paragraph",
        text: "Dengan menggunakan TIBER, Anda menyetujui bahwa sistem ini digunakan sebagai pendamping non-medis dan bukan pengganti konsultasi atau keputusan tenaga kesehatan."
      },
      {
        type: "paragraph",
        text: "Anda bertanggung jawab atas keakuratan data yang Anda masukkan. TIBER tidak bertanggung jawab atas keputusan medis, keterlambatan pengobatan, atau konsekuensi kesehatan yang timbul di luar fungsi sistem sebagai alat pencatatan dan pengingat."
      },
      {
        type: "paragraph",
        text: "TIBER dapat memperbarui fitur, tampilan, atau kebijakan secara berkala untuk meningkatkan pengalaman pengguna tanpa mengurangi perlindungan terhadap data Anda."
      },
    ],
    [
      {
        type: "heading",
        text: "Kebijakan Privasi"
      },
      {
        type: "paragraph",
        text: "TIBER hanya mengumpulkan data yang diperlukan untuk menjalankan fungsinya, antara lain:"
      },
      {
        type: "list",
        items: [
          "Informasi akun dasar",
          "Data survei awal",
          "Catatan konfirmasi harian",
          "Riwayat aktivitas dan pengaturan pengingat",
        ],
      },
      {
        type: "paragraph",
        text: "Data Anda disimpan secara aman dan tidak digunakan untuk tujuan komersial. TIBER tidak menjual, menyewakan, atau mendistribusikan data pribadi Anda kepada pihak lain."
      },
      {
        type: "paragraph",
        text: "Jika terdapat perubahan pada kebijakan privasi, TIBER akan memberitahukan Anda melalui pembaruan di dalam sistem."
      },
    ],
    [
      {
        type: "heading",
        text: "Data & Privasi Anda"
      },
      {
        type: "paragraph",
        text: "TIBER menghargai dan melindungi privasi Anda. Data yang Anda masukkan digunakan semata-mata untuk membantu pengalaman penggunaan, seperti pencatatan harian, visualisasi progres, dan pengingat pengobatan."
      },
      {
        type: "paragraph",
        text: "Data yang disimpan terbatas pada informasi dasar akun, hasil survei awal, catatan aktivitas, serta pengaturan pengingat. TIBER tidak mengumpulkan data medis detail, tidak melakukan diagnosis, dan tidak membagikan data Anda kepada pihak ketiga tanpa persetujuan."
      },
      {
        type: "paragraph",
        text: "Anda memiliki kendali penuh atas data Anda, termasuk melihat, menyesuaikan, atau menghapus data sesuai kebutuhan."
      },
    ],
  ];

  return (
    <div className="min-h-dvh">
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 items-center gap-8">
        {informationUsers.map(info => (
          <Card variant="whiteNoBorder" size="full" boxShadowActive="true" className="py-3.5 flex flex-col max-w-74 md:max-w-full min-h-75" key={info[0].text}>
            {info.map(data => {
              switch (data.type) {
                case "heading":
                  return (
                    <span className="font-inter font-semibold text-h4 text-black mb-2">{data.text}</span>
                  );
                case "paragraph":
                  return (
                    <span className="font-inter text-h5 text-justify">{data.text}</span>
                  );
                case "list":
                  return (
                    <ul className="list-disc pl-5">
                      {data.items.map(item => (
                        <li className="font-inter text-h5 text-black">{item}</li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InfoUserPage;
