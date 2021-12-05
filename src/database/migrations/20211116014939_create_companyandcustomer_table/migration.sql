-- CreateTable
CREATE TABLE `company` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `faebook` VARCHAR(191) NOT NULL,
    `instagram` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `cellphone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `postalcode` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `mission` VARCHAR(191) NOT NULL,
    `vision` VARCHAR(191) NOT NULL,
    `values` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `company_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(191) NOT NULL,
    `cellphone` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `customer_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
