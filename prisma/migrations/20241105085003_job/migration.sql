-- CreateTable
CREATE TABLE `Job` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `job_name` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `time_open` VARCHAR(191) NOT NULL,
    `time_close` VARCHAR(191) NOT NULL,
    `job_type` ENUM('Full_time', 'Part_time', 'Intern', 'Contract', 'Freelancer') NOT NULL,
    `salary` VARCHAR(191) NOT NULL,
    `job_description` VARCHAR(191) NOT NULL,
    `number_of_recruitment` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Candidate_information` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `job_id` INTEGER NOT NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `date_of_birth` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `education` VARCHAR(191) NOT NULL,
    `current_address` VARCHAR(191) NOT NULL,
    `years_of_experience` INTEGER NOT NULL,
    `salary_expect` VARCHAR(191) NOT NULL,
    `availability_time` VARCHAR(191) NOT NULL,
    `resume` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
