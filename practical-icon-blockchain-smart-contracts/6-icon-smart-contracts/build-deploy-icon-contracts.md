# Build and deploy ICON contracts (java score examples)
 
The tutorial for build and deploy contracts in java sccore examples
 
Ref https://github.com/icon-project/devportal/tree/master/getting-started/how-to-write-a-smart-contract
 
## Requirements
- OpenJDK 11 version
- Golang
- Goloop
- Gradlew
```
wget https://downloads.gradle-dn.com/distributions/gradle-6.4.1-bin.zip
unzip gradle-6.4.1-bin.zip
sudo mv gradle-6.4.1 /usr/local/gradle
export PATH=$PATH:/usr/local/gradle/bin
```
- Make sure goloop local node is started already
```
cd gochain-local
sudo ./run_gochain.sh start
export PATH=$PATH:/$HOME/goloop/bin
```

 
## Tutorial
 
### 1. Download sample Java SCORE
```
sudo git clone https://github.com/icon-project/java-score-examples.git
```
 
### 2. Build (and Optimize the jar) sample Java SCORE
```
cd java-score-examples
sudo ./gradlew build
sudo ./gradlew optimizedJar
```
 
### 3. Deploy the optimized jar using goloop CLI
```
goloop rpc sendtx deploy ./hello-world/build/libs/hello-world-0.1.0-optimized.jar \
    --uri http://127.0.0.1:9082/api/v3 \
    --key_store /$HOME/gochain-local/data/godWallet.json --key_password gochain \
    --nid 0x3 --step_limit 10000000000 \
    --content_type application/java \
    --param name=Devera
```
 
###  4. Verify the execution with deployed hash
- Get transaction detail
```
goloop rpc --uri http://localhost:9082/api/v3 txresult 0x594c834085fb85278e548226cc8d143a796541be7bc46a2d71dd8254bc72b9b7
```

- Call to contract
```
goloop rpc --uri http://localhost:9082/api/v3 call --to cxe527f0171d390b736e152ec1e1151f7b0f8975e8  --method getGreeting
```

- Send to contract
```
goloop rpc sendtx call --to cx94194b2ab041a13480e0042e86bd9ca5bccc40b9 \
    --uri http://127.0.0.1:9082/api/v3 \
    --key_store /$HOME/gochain-local/data/godWallet.json --key_password gochain \
    --nid 0x3 --step_limit 10000000 \
    --method setName --param name=Course
```