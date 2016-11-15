---
layout: post
title: "Using a Dropbox folder like Apache www on Ubuntu"
---
I’ll split this tutorial at two pieces:

1. For people who did the changes in the apache files to wished folder and had 403 error.

2. For people who have not made the changes and have no idea to how to do this.

### 1 – I did the changes for my directory on the Apache files, and now?

Open terminal and instead of type this:

```bash
chmod -R 755 /home/$USER/Dropbox/www
```

Try it:

```bash
chmod -R 755 /home/$USER/Dropbox/
```

Reason? That’s simple! If you give the acess permission only for www folder inside the Dropbox folder, the Apache will not complete the acess for it. Because the Apache will be barred trying to get acess in /Dropbox.

If necessary, restart Apache.

```bash
sudo service apache2 restart
```

or

```bash
sudo /etc/init.d/apache2 restart
```

### 2 – How can I modify the Apache files to target to my Dropbox folder?

On terminal, type:

```bash
sudo nano /etc/apache2/apache2.conf
```

Search for **<Directory /var/www/>** row, at mine is in **164 line**, and change it for:

```
<Directory /home/ YOUR USER NAME /Dropbox/www/>

Options Indexes FollowSymLinks
AllowOverride None
Require all granted

</Directory>
```

**Warning!  www is the folder name that I choose inside the Dropbox folder for my projects, you can change it to another name as you prefer.**

Save and close nano.

And now, still on terminal, type:

```bash
sudo nano /etc/apache2/sites-available/000-default.conf
```

Search for **DocumentRoot /var/www/html**  row, at mine is in **12 row**, and change it for:

```
DocumentRoot /home/YOUR USER NAME/Dropbox/www
```

Save, close nano and restart Apache:

```bash
sudo service apache2 restart
```

or

```bash
sudo /etc/init.d/apache2 restart
```

And now,  go to the first step in this tutorial and be happy! :)
