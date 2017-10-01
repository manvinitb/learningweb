DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
    `id` bigint(21) unsigned NOT NULL AUTO_INCREMENT,
    `username` varchar(20) NOT NULL,
    `email` varchar(32) NOT NULL,
    `first_name` varchar(20) NOT NULL,
    `last_name` varchar(20) NOT NULL,
    `age` int(3) NOT NULL,
    `password` varchar(32) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(`id`),
    KEY `idx_username` (`username`),
    KEY `idx_email` (`email`) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into users (`username`, `email`, `first_name`,  `last_name`, `age`, `password`) values ('manvi', 'manvi.nitb@gmail.com', 'Manvi', 'Mukharya', 23, 'redhat@123');
