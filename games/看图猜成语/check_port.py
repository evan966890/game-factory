import socket
import psutil

def find_port(pid):
    try:
        proc = psutil.Process(pid)
        connections = proc.connections()
        for conn in connections:
            if conn.status == 'LISTEN':
                return conn.laddr.port
    except:
        pass
    return None

# Find python server processes
for proc in psutil.process_iter(['pid', 'name', 'cmdline']):
    try:
        if 'python' in proc.info['name'].lower() and 'server.py' in ' '.join(proc.info['cmdline']):
            port = find_port(proc.info['pid'])
            if port:
                print(f"Server PID {proc.info['pid']} is listening on port {port}")
    except:
        pass