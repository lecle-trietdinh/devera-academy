# Setup ICON local network on Ubuntu 20.04

## 1. Install Docker
- Download packages
```
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
apt-cache policy docker-ce

```

- Install docker-ce
```
sudo apt install docker-ce
```

- Check docker status
```
sudo systemctl status docker
```

- Install docker-compose
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

## 2. Install GO
```
sudo wget -c https://go.dev/dl/go1.16.15.linux-amd64.tar.gz -O - | sudo tar -xz -C /usr/local
export PATH=$PATH:/usr/local/go/bin
go version
```


## 3. Install `goloop` and `gochain-local`

### `goloop`: A blockchain node written in Go
### `gochain-local`: Helper scripts to run gochain docker container as a local network


- Install ubuntu libs
```
sudo apt install make g++
sudo apt-get install libsnappy-dev libbz2-dev libz-dev (for golang)
```


- Install rocksdb (this will take much time for building libs)
```
sudo git clone https://github.com/facebook/rocksdb.git
cd rocksdb
sudo DEBUG_LEVEL=0 make shared_lib install-shared
export LD_LIBRARY_PATH=/usr/local/lib
```

- Download goloop and build gochain-icon-image (this will take much time for building libs)
```
sudo git clone https://github.com/icon-project/goloop.git
cd goloop
sudo make gochain-icon-image
sudo docker images goloop/gochain-icon
```


- Download gochain-local
```
sudo git clone https://github.com/icon-project/gochain-local.git
```

- Start
```
cd gochain-local
sudo ./run_gochain.sh start
```

## 4. Goloop CLI
- Install OpenJDK 11 version
```
sudo apt install openjdk-11-jdk
```

- Download goloop and build
```
sudo git clone https://github.com/icon-project/goloop.git
sudo chmod -R 777 goloop
cd goloop
sudo make goloop
./bin/goloop version
```

- Set goloop environment to path
```
export PATH=$PATH:/$HOME/goloop/bin
```