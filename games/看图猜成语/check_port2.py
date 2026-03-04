import socket
import subprocess
import re

# Try to find listening ports using netstat or lsof
try:
    # Try netstat
    result = subprocess.run(['netstat', '-tlnp'], capture_output=True, text=True)
    if result.returncode == 0:
        lines = result.stdout.split('\n')
        for line in lines:
            if 'python' in line and 'LISTEN' in line:
                print(line)
except:
    pass

try:
    # Try lsof
    result = subprocess.run(['lsof', '-i', '-P', '-n'], capture_output=True, text=True)
    if result.returncode == 0:
        lines = result.stdout.split('\n')
        for line in lines:
            if 'python' in line and 'LISTEN' in line:
                print(line)
except:
    pass

# Try to connect to common ports
for port in [8000, 8080, 3000, 5000, 8888, 9000]:
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(0.1)
        result = sock.connect_ex(('localhost', port))
        if result == 0:
            print(f"Port {port} is open")
        sock.close()
    except:
        pass