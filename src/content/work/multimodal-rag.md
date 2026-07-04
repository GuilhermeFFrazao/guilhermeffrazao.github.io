---
title: 'Multi-modal RAG for real-world data'
summary: 'My master’s thesis: a retrieval-augmented generation system that lets LLMs interact with and transform extensive multi-modal data — turning scattered documents into something you can query, reason over, and reshape.'
date: 2026-06-01
tags: ['Python', 'LLMs', 'RAG', 'Vector search', 'Multi-modal AI']
status: 'Thesis · In progress'
featured: true
---

> **TODO(Guilherme):** this case study is a structured draft. Everything marked
> `TODO` needs your real details — correct freely, the structure will hold.

## The problem

Organizations sit on enormous amounts of knowledge that language models can't
directly use: PDFs full of tables, scanned documents, images, presentations,
spreadsheets. Classic RAG pipelines handle clean text well but degrade badly
when the source material is heterogeneous.

**TODO:** the specific problem statement of your thesis — what gap did you and
your supervisor identify?

## The approach

A retrieval-augmented generation system designed for multi-modal inputs:

- **Ingestion** — parsing and normalizing data across formats
  (**TODO:** which modalities exactly — PDF, images, tables, audio?).
- **Indexing** — chunking and embedding content into a vector store
  (**TODO:** which embedding model and vector database?).
- **Retrieval & generation** — grounding LLM responses in retrieved context so
  the system can both *answer questions about* and *transform* the data
  (**TODO:** which LLM(s), and what does "transform" concretely mean in your
  system — summarization, format conversion, structured extraction?).

## Architecture

**TODO:** a short description (or diagram) of the pipeline —
ingestion → processing → vector store → retriever → LLM → output.

## Status & results

The thesis is in progress at **NOVA School of Science and Technology**,
concluding September 2026. **TODO:** current stage, any evaluation results,
supervisor / lab name.

## What I'm learning

Building production-shaped RAG means confronting the unglamorous parts of AI
engineering: data quality, chunking strategy, retrieval evaluation, and
hallucination control. **TODO:** your own take — what surprised you?
