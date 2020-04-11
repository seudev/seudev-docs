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

## Run process in background

To run any executable in background on linux use `&` at end of command. Example:

```sh
./startup.sh &
```

If you desire send to background a process that already running, use `ctrl + z` to stop momentarily the process and type `bg` to send the process to background.

To return a process to foreground type `fg`. To see the list of processes running in background use the `jobs` command. If you are multiple background processes use `fg X`, where `X` is the process number, that is displayed by the `jobs` command.
