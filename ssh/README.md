# SSH

## BitBucket MacOS

1. Open [settings](https://bitbucket.org/account/settings/ssh-keys/)
2. Copy your email - stokarev@novakidschool.com - for example
3. Open a terminal and navigate to your folder, for example: `cd ~ `
4. `ssh-keygen -t ed25519 -b 4096 -C "{stokarev@novakidschool.com}" -f bitbucket_mac_2023_06`
5. When prompted to Enter passphrase, you can either provide a password or leave the password empty. If you input a password, you will be prompted for this password each time SSH is used, such as using Git command that contact Bitbucket Cloud (such as git push, git pull, and git fetch). Providing a password will prevent other users with access to the device from using your keys.
6. `ssh-add bitbucket_mac_2023_06`
7. ~/.ssh/config add
```
Host bitbucket.org
  AddKeysToAgent yes
  IdentityFile ~/.ssh/ssh-add bitbucket_mac_2023_06
```


### upload SSH ub key to BitBucket

At bitbucket.org, select your avatar (Your profile and settings) from the navigation bar at the top of the screen.

Under Settings, select Personal settings.

Under Security, select SSH keys.

Select Add key.

In the Add SSH key dialog, provide a Label to help you identify which key you are adding. For example, Work Laptop <Manufacturer> <Model>. A meaning full label will help you identify old or unwanted keys in the future.

Open the public SSH key file (public keys have the .pub file extension) in a text editor. The public key should be in the .ssh/ directory of your user (or home) directory. The contents will be similar to:

ssh-ed25529 LLoWYaPswHzVqQ7L7B07LzIJbntgmHqrE40t17nGXL71QX9IoFGKYoF5pJKUMvR+DZotTm user@example.com
Copy the contents of the public key file and paste the key into the Key field of the Add SSH key dialog.

Select Add key.

If the key is added successfully, the dialog will close and the key will be listed on the SSH keys page.

If you receive the error That SSH key is invalid, check that you copied the entire contents of the public key (.pub file).

## add pub key to ~/.ssh/known_hosts

add stroke with pub key 
`bitbucket.org,18.234.32.157 ssh-ed25519 A************==`
