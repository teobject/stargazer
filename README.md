■AmazonLinux2 Node.js Linuxコマンド

sudo yum update

sudo yum install httpd
sudo systemctl enable httpd.service
sudo yum install -y mariadb-server
sudo systemctl enable mariadb
sudo systemctl is-enabled mariadb
sudo systemctl start mariadb

sudo vi /etc/my.cnf.d/mariadb-server.cnf
#[mariadb]
#character-set-server = utf8mb4 <- これを追記

sudo vi /etc/my.cnf.d/client.cnf
#[client-mariadb]
#default-character-set = utf8mb4 <- これを追記

#mariadb初期設定
sudo mysql_secure_installation

sudo usermod -a -G apache ec2-user
sudo chown -R ec2-user:apache /var/www
sudo chmod 2775 /var/www

sudo amazon-linux-extras install -y \
  lamp-mariadb10.2-php7.2=10.2.10_7.2.0 \
  php7.2=7.2.0

sudo yum -y install gcc-c++
sudo yum -y install git

git clone https://github.com/creationix/nvm.git ~/.nvm
source ~/.nvm/nvm.sh
vi .bash_profile

# nvm
if [[ -s ~/.nvm/nvm.sh ]] ; then
        source ~/.nvm/nvm.sh ;
fi

nvm ls-remote
nvm install 12.18.3
nvm use v12.18.3
npm init -y
npm install discord.js @discordjs/opus


sudo wget -r --no-parent -A 'epel-release-*.rpm' http://dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/
sudo rpm -Uvh dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/epel-release-*.rpm
sudo yum-config-manager --enable epel*
sudo yum install certbot python2-certbot-apache

#https://qiita.com/MysteriousMonkey/items/4d3d857c0e68d4bfff39

certbot --apache -d suiseicode.live
certbot --apache -d dcbot.suiseicode.live
certbot --apache -d api.suiseicode.live