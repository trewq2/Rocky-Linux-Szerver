// ===============================
// TANÁRI LETÖLTÉSI BEÁLLÍTÁSOK
// ===============================
// Az OVA fájlokat NE tedd közvetlenül a GitHub Pages repositoryba, ha nagyok.
// Add meg itt a GitHub Release / Google Drive / OneDrive / iskolai szerver közvetlen letöltési URL-jét.

window.LAB_CONFIG = {
  rockyOva: {
    title: "Rocky Linux 10.2 RAW szerver OVA",
    url: "PASTE_ROCKY_OVA_DOWNLOAD_URL_HERE",
    filename: "RockyLinux10_2_RAW.ova",
    size: "",
    sha256: ""
  },
  windowsOva: {
    title: "Windows 7 x86 kliens OVA",
    url: "PASTE_WINDOWS7_OVA_DOWNLOAD_URL_HERE",
    filename: "Windows7_x86_Client.ova",
    size: "",
    sha256: ""
  },
  documentationTemplate: {
    title: "Képernyőképes dokumentációs Word-sablon",
    url: "downloads/RockyLinux_10_2_Labor_Dokumentacio_Sablon.docx",
    filename: "RockyLinux_10_2_Labor_Dokumentacio_Sablon.docx"
  },
  rockyLogin: "student",
  passwordNote: "A jelszót a tanár adja meg.",
  labNetwork: "LABNET",
  serverIp: "192.168.50.1/24"
};
