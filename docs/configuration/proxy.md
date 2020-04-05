# Proxy configurations
{docsify-updated}

***Note:*** *Replace the `USERNAME` and `PASSWORD` words by your proxy credentials and replace the `HOST` and `PORT` words by the proxy host and port.*

## Linux

Add or edit the below variables in the `~/.profile` file:
```sh
export http_proxy="http://HOST:PORT"
export https_proxy="http://HOST:PORT"
export ftp_proxy="http://HOST:PORT"
export no_proxy="localhost,127.0.0.0/8"
```

If your proxy server requires authentication, set the proxy settings as follows:
```sh
export http_proxy="http://USERNAME:PASSWORD@HOST:PORT"
export https_proxy="http://USERNAME:PASSWORD@HOST:PORT"
export ftp_proxy="http://USERNAME:PASSWORD@HOST:PORT"
export no_proxy="localhost,127.0.0.0/8"
```

?> Other option is edit it by system settings. Go to Networking settings > Network proxy and add the proxy config.

## Apt-get

Add or edit the below lines to `/etc/apt/apt.conf` file:

```
Acquire::http::Proxy "http://HOST:PORT";
Acquire::https::Proxy "http://HOST:PORT";
```

If your proxy server requires authentication, set the proxy settings as follows:
```
Acquire::http::Proxy "http://USERNAME:PASSWORD@HOST:PORT";
Acquire::https::Proxy "http://USERNAME:PASSWORD@HOST:PORT";
```

## Wget

Uncomment the below lines (remove the `#` of the line start) in the `/etc/wgetrc` file and set the proxy settings:

```
https_proxy = http://HOST:PORT
http_proxy = http://HOST:PORT
ftp_proxy = http://HOST:PORT
```

If your proxy server requires authentication, set the proxy settings as follows:
```
https_proxy = http://USERNAME:PASSWORD@HOST:PORT
http_proxy = http://USERNAME:PASSWORD@HOST:PORT
ftp_proxy = http://USERNAME:PASSWORD@HOST:PORT
```

Verify if the `use_proxy` variable is equal to `on` or is commented (starts with `#`).

## Npm

Execute the below commands to set the proxy settings:
```sh
npm config set proxy http://HOST:PORT
npm config set https-proxy http://HOST:PORT
```

If your proxy server requires authentication, set the proxy settings as follows:
```sh
npm config set proxy http://USERNAME:PASSWORD@HOST:PORT
npm config set https-proxy http://USERNAME:PASSWORD@HOST:PORT
```

## Maven

Add the proxy tags in the `~/.m2/settings.xml`

```xml
<settings>

  <proxies>
   <proxy>
      <id>http-proxy</id>
      <active>true</active>
      <protocol>http</protocol>
      <host>HOST</host>
      <port>PORT</port>
      <nonProxyHosts>localhost,127.0.0.0/8</nonProxyHosts>
    </proxy>
      <proxy>
      <id>https-proxy</id>
      <active>true</active>
      <protocol>https</protocol>
      <host>HOST</host>
      <port>PORT</port>
      <nonProxyHosts>localhost,127.0.0.0/8</nonProxyHosts>
    </proxy>
  </proxies>

</settings>
```

If your proxy server requires authentication, set the proxy settings as follows:

```xml
<settings>

  <proxies>
   <proxy>
      <id>http-proxy</id>
      <active>true</active>
      <protocol>http</protocol>
      <host>HOST</host>
      <port>PORT</port>
      <username>USERNAME</username>
      <password>PASSWORD</password>
      <nonProxyHosts>localhost,127.0.0.0/8</nonProxyHosts>
    </proxy>
      <proxy>
      <id>https-proxy</id>
      <active>true</active>
      <protocol>https</protocol>
      <host>HOST</host>
      <port>PORT</port>
      <username>USERNAME</username>
      <password>PASSWORD</password>
      <nonProxyHosts>localhost,127.0.0.0/8</nonProxyHosts>
    </proxy>
  </proxies>

</settings>
```

## Docker

Create the below directory for the Docker service configurations:
```sh
sudo mkdir -p /etc/systemd/system/docker.service.d
```

Add the below lines in the `/etc/systemd/system/docker.service.d/proxy.conf` file:

```
[Service]
Environment="HTTP_PROXY=http://HOST:PORT"
Environment="HTTPS_PROXY=http://HOST:PORT"
Environment="NO_PROXY="localhost,127.0.0.0/8"
```

If your proxy server requires authentication, set the proxy settings as follows:
```
[Service]
Environment="HTTP_PROXY=http://USERNAME:PASSWORD@HOST:PORT"
Environment="HTTPS_PROXY=http://USERNAME:PASSWORD@HOST:PORT"
Environment="NO_PROXY="localhost,127.0.0.0/8"
```

Execute the below commands to restart the docker service

```sh
sudo systemctl daemon-reload
sudo systemctl restart docker.service
```
