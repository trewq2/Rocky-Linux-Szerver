#!/usr/bin/env bash
set -euo pipefail

if [[ $EUID -ne 0 ]]; then
  echo "Futtasd rootként: sudo bash $0"
  exit 1
fi

echo "=== Rocky Linux 10.2 RAW sablon előkészítése ==="

dnf -y upgrade
dnf -y install nano vim-enhanced curl wget bind-utils iproute procps-ng \
  policycoreutils-python-utils tar unzip

# A tanulói labor szolgáltatásai ne legyenek előre megoldva.
dnf -y remove kea bind vsftpd httpd 2>/dev/null || true

systemctl enable sshd firewalld
systemctl start firewalld
systemctl start sshd

hostnamectl set-hostname rocky-raw

# NIC1 NAT maradjon DHCP-n; NIC2-t a tanuló fogja konfigurálni.
# Ne hozzunk létre előre LABNET NetworkManager-profilt.

# Takarítás
dnf clean all
rm -rf /var/cache/dnf/*
rm -f /root/.bash_history
rm -f /home/student/.bash_history 2>/dev/null || true

echo
echo "RAW sablon előkészítve."
echo "Következő: sudo bash rocky102_raw_check.sh"
