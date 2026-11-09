-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-11-2026 a las 14:22:22
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `examenprovedor`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provedor`
--

CREATE TABLE `provedor` (
  `id_proveedor` int(11) NOT NULL,
  `nit` varchar(450) NOT NULL,
  `razon_social` varchar(120) NOT NULL,
  `contacto` varchar(450) DEFAULT NULL,
  `email` varchar(450) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `ciudad` varchar(450) DEFAULT NULL,
  `estado` varchar(450) DEFAULT 'activo',
  `fecha_creacion` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `provedor`
--

INSERT INTO `provedor` (`id_proveedor`, `nit`, `razon_social`, `contacto`, `email`, `telefono`, `ciudad`, `estado`, `fecha_creacion`) VALUES
(1, '2356', 'panbimbo', 'darwin', 'darwin@gmail.com', '310677453', 'cartago', NULL, '2026-11-09 00:00:00'),
(2, '123', 'ayudas2', 'camilo', 'camilo@gmail.com', '310677453', 'cartago', 'activo', '2026-11-09 00:00:00'),
(3, '1234', 'ayudas2', 'camilo', 'lopez@gmail.com', '310677453', 'cartago', 'activo', '2026-11-09 00:00:00'),
(5, '78956', 'comer', 'camilo', 'tttt@gmail.com', '310677453', 'cartago', 'activo', '0000-00-00 00:00:00'),
(6, '789566', 'comer', 'camilo', 'lll@gmail.com', '310677453', 'cartago', 'activo', NULL),
(7, '789569', 'comer', 'camilo', '@gmail.com', '310677453', 'cartago', 'activo', '2026-11-09 08:18:41');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `provedor`
--
ALTER TABLE `provedor`
  ADD PRIMARY KEY (`id_proveedor`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `provedor`
--
ALTER TABLE `provedor`
  MODIFY `id_proveedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
