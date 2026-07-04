import { BusinessVertical, Asset } from './types';

export const BUSINESS_VERTICALS: BusinessVertical[] = [
  {
    id: 'ghost_kitchens',
    name: 'Ghost Kitchens',
    description: 'Cocinas profesionales optimizadas para delivery y producción de catering. Añade equipamiento culinario avanzado sin CapEx.',
    iconName: 'Utensils',
    assets: [
      {
        id: 'combi_oven',
        name: 'Horno Mixto de Convección Inteligente 10 GN',
        description: 'Horno industrial de alta tecnología con control de humedad inteligente, autolimpieza integrada y programación remota para una producción constante de delivery.',
        cost: 15000,
        monthlyMaint: 220,
        avgChargePerUse: 3.50,
        defaultUsesPerMonth: 500,
        metricUnit: 'horas de cocción',
        haasMonthlyRent: 480,
        hasSplitModel: true
      },
      {
        id: 'blast_chiller',
        name: 'Abatidor de Temperatura Industrial Rápido',
        description: 'Abatidor ultra rápido de alto rendimiento de bandejas múltiples, para garantizar la conservación higiénica, frescura y sabor óptimo de los alimentos cocinados.',
        cost: 11500,
        monthlyMaint: 180,
        avgChargePerUse: 2.20,
        defaultUsesPerMonth: 600,
        metricUnit: 'ciclos de enfriamiento',
        haasMonthlyRent: 370,
        hasSplitModel: true
      },
      {
        id: 'vacuum_sealer',
        name: 'Envasadora al Vacío Profesional de Doble Campana',
        description: 'Consola de envasado al vacío de alto vacío y sellado perfecto con doble campana para optimizar tiempos de envasado masivo y conservación a largo plazo.',
        cost: 7800,
        monthlyMaint: 120,
        avgChargePerUse: 1.50,
        defaultUsesPerMonth: 800,
        metricUnit: 'ciclos de sellado',
        haasMonthlyRent: 250,
        hasSplitModel: true
      }
    ]
  },
  {
    id: 'medical',
    name: 'Clínicas',
    description: 'Centros odontológicos, dermatológicos, estéticos y fisioterapéuticos. Incorpora tecnología médica premium con total flexibilidad operativa.',
    iconName: 'HeartPulse',
    assets: [
      {
        id: 'laser_diodo',
        name: 'Equipo Láser Diodo de Alta Potencia',
        description: 'Plataforma avanzada de depilación médica definitiva de triple longitud de onda, para incorporar un servicio estético altamente demandado.',
        cost: 35000,
        monthlyMaint: 500,
        avgChargePerUse: 60.00,
        defaultUsesPerMonth: 80,
        metricUnit: 'sesiones',
        haasMonthlyRent: 1200,
        hasSplitModel: false
      },
      {
        id: 'dental_scanner',
        name: 'Escáner Intraoral 3D HD Dental',
        description: 'Escáner odontológico de alta definición para impresiones digitales en tiempo real, aumentando la conversión de tratamientos.',
        cost: 22000,
        monthlyMaint: 350,
        avgChargePerUse: 45.00,
        defaultUsesPerMonth: 60,
        metricUnit: 'diagnósticos',
        haasMonthlyRent: 850,
        hasSplitModel: false
      },
      {
        id: 'shockwave_therapy',
        name: 'Sistema Clínico de Ondas de Choque',
        description: 'Equipo de ondas de choque radiales para tratamientos de fisioterapia avanzada y medicina deportiva con excelentes tasas de recuperación.',
        cost: 16000,
        monthlyMaint: 250,
        avgChargePerUse: 35.00,
        defaultUsesPerMonth: 75,
        metricUnit: 'tratamientos',
        haasMonthlyRent: 600,
        hasSplitModel: false
      },
      {
        id: 'laser_tattoo_remover',
        name: 'Láser Nd:YAG para Eliminación de Tatuajes',
        description: 'Tecnología médica avanzada de picosegundos para la eliminación segura de tatuajes y lesiones pigmentarias con máxima eficacia y sin cicatrices.',
        cost: 29000,
        monthlyMaint: 400,
        avgChargePerUse: 80.00,
        defaultUsesPerMonth: 60,
        metricUnit: 'sesiones de eliminación',
        haasMonthlyRent: 950,
        hasSplitModel: true
      }
    ]
  },
  {
    id: 'sports_fitness',
    name: 'Deporte & Fitness',
    description: 'Gimnasios, boxes de crossfit, centros de entrenamiento personal y rendimiento deportivo. Diferencia tu club y ofrece nuevos servicios avanzados sin desembolso inicial.',
    iconName: 'Dumbbell',
    assets: [
      {
        id: 'body_analyzer',
        name: 'Analizador de Composición Corporal Pro 3D',
        description: 'Analizador segmental de bioimpedancia multifrecuencia de grado clínico con informe interactivo inmediato en el móvil del socio mediante código QR.',
        cost: 12500,
        monthlyMaint: 180,
        avgChargePerUse: 12.00,
        defaultUsesPerMonth: 250,
        metricUnit: 'análisis',
        haasMonthlyRent: 400,
        hasSplitModel: true
      },
      {
        id: 'pressotherapy',
        name: 'Plataforma de Presoterapia Profesional de Recuperación',
        description: 'Equipo neumático de alta presión para la recuperación acelerada post-entrenamiento de deportistas, mejora del drenaje linfático y el retorno venoso.',
        cost: 8500,
        monthlyMaint: 110,
        avgChargePerUse: 15.00,
        defaultUsesPerMonth: 180,
        metricUnit: 'sesiones de recuperación',
        haasMonthlyRent: 280,
        hasSplitModel: true
      },
      {
        id: 'cryo_chamber',
        name: 'Cámara de Crioterapia Localizada de Recuperación Rápida',
        description: 'Dispositivo médico-deportivo para crioterapia dirigida con chorro de nitrógeno regulado para alivio de inflamaciones musculares y rehabilitación acelerada de lesiones.',
        cost: 21000,
        monthlyMaint: 320,
        avgChargePerUse: 30.00,
        defaultUsesPerMonth: 140,
        metricUnit: 'sesiones localizadas',
        haasMonthlyRent: 720,
        hasSplitModel: true
      },
      {
        id: 'ball_throwing_machine',
        name: 'Máquina Lanzapelotas Inteligente de Alta Precisión',
        description: 'Lanzapelotas robotizada con control desde app móvil, oscilación multiángulo programable y ajuste dinámico de efectos y velocidad para pistas de tenis y pádel.',
        cost: 6500,
        monthlyMaint: 90,
        avgChargePerUse: 8.00,
        defaultUsesPerMonth: 200,
        metricUnit: 'horas de entrenamiento',
        haasMonthlyRent: 220,
        hasSplitModel: true
      }
    ]
  }
];

export const MODEL_COMPARISON = {
  traditional: {
    title: 'Compra Tradicional (CapEx)',
    investment: 'Muy alta (desembolso total del valor del activo)',
    risk: 'Asumido por el cliente (devaluación y obsolescencia)',
    maint: 'Costes adicionales variables y gestión técnica compleja',
    cashflow: 'Coste fijo inamovible e impacto negativo en balance contable'
  },
  equipy: {
    title: 'Modelo HaaS EQUIPY (OpEx)',
    investment: 'Cero € (Inversión asumida por EQUIPY)',
    risk: 'Cero (EQUIPY actualiza y gestiona el ciclo de vida)',
    maint: 'Totalmente incluido con soporte premium garantizado',
    cashflow: 'Flexible (Gasto operativo variable o ingresos por uso compartido)'
  }
};
