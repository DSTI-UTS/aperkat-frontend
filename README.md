# Next updates

- [ok] bug pengajuan
- [ok] ubah label menjadi RAB
- [ok] ubah format file rab menjadi exel
- [ok] bug ubah kode rkat di halaman ubah
- [ok] (Halaman pengajuan) hanya boleh input 1 pengajuan dengan 1 kode rkat
- [ok] (Halaman update pengajuan) hanya boleh input 1 pengajuan dengan 1 kode rkat
- [ok] Bug download pengajuan
- [ok] validasi nominal pengajuan sesuai dengan nominal yang ada di RKAT
- [ok] jika sudah pencairan maka pengaju wajib upload lpj dalam waktu 1 minggu dan tidak boleh input pengajuan ketika belum upload 2x lpj
- [ok] pengajuan selesai
- [ok] grafik sub divisi
- [ok] grafik rkat (detail grafik sub divisi)
- [ok] perubahan persetujuan pengajuan dibagi dir keuangan dan sekniv
- [ok] buat user untuk mengupload bukti pencairan
- [ok] buat user untuk terima/tolak lpj keuangan 
- - # VALIDASI 2 MENU DIATAS
INSERT INTO `user` (`id_user`, `fullname`, `password`, `id_struktur`, `id_struktur_child1`, `id_struktur_child2`, `email`, `nomor_wa`, `created_at`, `updated_at`) VALUES ('3333', '', '', NULL, NULL, NULL, '', '', '2021-11-17 03:27:50.000000', '2021-11-17 03:27:50.000000');
266 tidak tampil pada halaman pengajuan upload pencairan ubah pencairan = null
dir kemahasiswaan 240 ubah next = 24

not fix - aneh 242, 249, 256, 257, 
periksa atasan pasca sarjana
periksa FEB 352, 353, 354, 355, 356, 
periksa frs 359, 364
pusat bahasa 369
teknik mesin 370

untuk testing 341
# Sudah pencairan
- print pengajuan dengan format baru
- - insert image (kop surat)
- - bagaimana cara membuat format surat?
- fitur print lengkap dengan semua dokumen pendukung
