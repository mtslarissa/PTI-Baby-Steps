-- Criação das tabelas e inserção dos dados no SUPABASE

-- Tabela de usuários 
CREATE TABLE usuarios (  id SERIAL PRIMARY KEY,  nome VARCHAR(100) NOT NULL,  email VARCHAR(100) UNIQUE NOT NULL,  senha_hash VARCHAR(255) NOT NULL);

-- Tabela de bebês
CREATE TABLE bebes (  id SERIAL PRIMARY KEY,  nome VARCHAR(100) NOT NULL,  data_nascimento DATE NOT NULL,  usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE);

-- Tabela de atividades
CREATE TABLE atividades (  id SERIAL PRIMARY KEY,  tipo VARCHAR(50) NOT NULL,  descricao TEXT,  data_hora TIMESTAMP NOT NULL,  bebe_id INTEGER REFERENCES bebes(id) ON DELETE CASCADE);

-- Inserir dados fake
INSERT INTO usuarios (nome, email, senha_hash) VALUES  ('Alice Silva', 'alice@gmail.com', '123456'),  ('Mateus Costa', 'mateus@gmail.com', 'abcdef');
INSERT INTO bebes (nome, data_nascimento, usuario_id) VALUES  ('Luna', '2023-02-15', 1),  ('Theo', '2024-08-22', 2);
INSERT INTO atividades (tipo, descricao, data_hora, bebe_id) VALUES  ('sono', 'Dormiu 2 horas à tarde', '2024-04-30 14:00:00', 1),  ('alimentacao', 'Mamou 150ml', '2024-03-03 15:00:00', 1);