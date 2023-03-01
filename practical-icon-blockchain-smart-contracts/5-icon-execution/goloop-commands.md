# Goloop CLI

https://github.com/icon-project/devportal/blob/master/icon-2.0/goloop/management/goloop_cli.md#goloop-rpc


## Commands

### Get last block

```
goloop rpc --uri http://127.0.0.1:9082/api/v3 lastblock
```

### [Generate a keystore] (https://github.com/icon-project/devportal/blob/master/icon-2.0/goloop/management/goloop_cli.md#goloop-ks)
```
goloop ks gen --out devera.json --password 123456
```

### Get balance
```
goloop rpc --uri http://127.0.0.1:9082/api/v3 balance hx45f1cb517cd0e7634707302434ed570a0590ea78
```

### Transfer ICX
```
goloop rpc --uri http://127.0.0.1:9082/api/v3 sendtx transfer --to hx45f1cb517cd0e7634707302434ed570a0590ea78 --value 1000000000 --key_store /$HOME/gochain-local/data/godWallet.json --key_password gochain --nid 0x3 --step_limit 1000000
```

### Get transaction detail
```
goloop rpc --uri http://localhost:9082/api/v3 txresult "0x02242a0d8747e1812e84a685d5040e69412efa71a157cdbd37bbd2ad7798fb03"  
```

### Deloy contract
```
goloop rpc sendtx deploy <path-to-contract-file> \
    --uri http://localhost:9082/api/v3 \
    --key_store godWallet.json --key_password gochain \
    --nid 3 --step_limit 10000000000 \
    --content_type application/java \
    --param <param-name>=<param-value>
```

### Call to contract
```
goloop rpc --uri http://localhost:9082/api/v3 call --to cx1b9849096b8c5870834eb6347549024b0b82d2e3  --method getGreeting
```

### Send to contract
```
goloop rpc sendtx call --to cx94194b2ab041a13480e0042e86bd9ca5bccc40b9 \
    --uri http://127.0.0.1:9082/api/v3 \
    --key_store /$HOME/gochain-local/data/godWallet.json --key_password gochain \
    --nid 0x3 --step_limit 10000000 \
    --method setName --param name=Course
```

