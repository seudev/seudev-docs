# Process commands
{docsify-updated}

## Kill process by port

### Linux

```sh
kill $(lsof -t -i:8080)
```

or more violently:

```sh
kill -9 $(lsof -t -i:8080)
```

*`-9` corresponds to the SIGKILL - terminate immediately/hard kill signal.*

### Windows

Get the PID of process listening to the port `8080`:

```cmd
netstat -aon |find /i "listening" |find "8080"
```

Run the below command, replacing the `APP_PID` word by the PID returned in the previous command.

```cmd
taskkill /F /PID APP_PID
```
