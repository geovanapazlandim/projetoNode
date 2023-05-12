-- CreateTable
CREATE TABLE "cartao" (
    "id" TEXT NOT NULL,
    "bandeira" TEXT NOT NULL,
    "numeroCartao" TEXT NOT NULL,
    "validadecartao" TIMESTAMP(3) NOT NULL,
    "codigo" TEXT NOT NULL,
    "dataExpedicao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cartao_pkey" PRIMARY KEY ("id")
);
