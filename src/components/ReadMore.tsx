import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { Planet } from '@/constants/data'

interface Props {
    onClick: (id: number) => void;
    selectedPlanet: Planet
}

const ReadMore: React.FC<Props> = ({ onClick, selectedPlanet }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute z-20 bottom-0 left-0 w-full"
        >
            <div className="p-6 flex flex-col items-center justify-center gap-4">
                <Button
                    className="text-white"
                    variant="link"
                    onClick={() => onClick(selectedPlanet.id)}
                >
                    Read more about {selectedPlanet.name}
                    <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </motion.div>
    )
}

export default ReadMore
