import os


ports = [8080, 3000, 80]

for i in range(90, 120):
    for port in ports:
        target = f"20.20.0.{i}"
        print(f"Ping-ing {target}:{port}...")
        resp = os.system(f"curl {target}:{port} -m 3")
        if resp == 0:
            print(f"found connection on {target}:{port}")
            break
        else:
            print(f"{target}:{port} is not open!")
