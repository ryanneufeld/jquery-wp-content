# -*- mode: ruby -*-
# vi: set ft=ruby :
VAGRANTFILE_API_VERSION = "2"
Vagrant.require_version ">= 1.4.0"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  # use the config key as the vm identifier
  config.vm.box = "jquery-wp-content-32"
  config.vm.box_download_checksum_type = "sha256"
  config.vm.box_download_checksum = "b12638dc474f0640531350b73adbf44032f734142b9b179e8c685179fc9bca7b"

  config.vm.box_url = "https://www.dropbox.com/s/zgh21pq25aw75q8/jquery-wp-content-32bit.box?dl=1"
  # config.vm.box_url = "http://boxes.jquery.com/jquery-wp-content-32bit.box"

  config.vm.synced_folder "./", "/var/www/wordpress/jquery-wp-content"

  # assign an ip address in the hosts network
  config.vm.network "private_network", ip: "172.27.72.27"

  # set the hostname of the vm so puppet site.pp will react
  # with the right node config
  # config.vm.provision :shell, :inline => "hostname vagrant.jquery.com"
  config.vm.hostname = "vagrant.jquery.com"

  config.vm.provider "virtualbox" do |v|
    # make sure that the name makes sense when seen in the vbox GUI
    v.name = "jQuery Sites"

    # Be nice to our users.
    v.customize ["modifyvm", :id, "--cpuexecutioncap", "50"]
  end
end
