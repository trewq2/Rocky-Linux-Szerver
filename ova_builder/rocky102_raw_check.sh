#!/usr/bin/env bash
set -u

ok(){ printf "[OK]   %s\n" "$1"; }
bad(){ printf "[HIBA] %s\n" "$1"; }

echo "=== Rocky RAW sablon ellenőrzés ==="

grep -q "Rocky Linux release 10.2" /etc/rocky-release && ok "Rocky Linux 10.2" || bad "$(cat /etc/rocky-release 2>/dev/null)"
systemctl is-enabled --quiet sshd && ok "sshd engedélyezett" || bad "sshd nincs engedélyezve"
systemctl is-enabled --quiet firewalld && ok "firewalld engedélyezett" || bad "firewalld nincs engedélyezve"

for p in kea bind vsftpd httpd; do
  if rpm -q "$p" >/dev/null 2>&1; then
    bad "$p telepítve van – RAW sablonban ne legyen"
  else
    ok "$p nincs előre telepítve"
  fi
done

echo
echo "Hálózati eszközök:"
ip -br link
echo
echo "NetworkManager profilok:"
nmcli -f NAME,DEVICE,TYPE,STATE connection show
